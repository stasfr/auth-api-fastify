import crypto from "crypto";
import prisma from "../../../prisma/client";

import mailService from "../mail/mail.service";

import type { UserCreate, UserResponse } from "../../types/Auth";

class AuthService {
  async register(registerPayload: UserCreate): Promise<UserResponse> {
    const { password, email, ...rest } = registerPayload;

    if (!email) throw new Error("Email not provided");
    if (!password) throw new Error("Password not provided");

    // basic validation
    const isExist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (isExist) throw new Error("User already exist");

    // hashing password
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex");

    const user = await prisma.user.create({
      data: {
        ...rest,
        email,
        salt,
        password: hash,
        activation: {
          create: {
            activationLink: crypto.randomUUID(),
          },
        },
      },
      include: { activation: true },
    });

    if (!user) throw new Error("User not created");
    if (!user.activation) throw new Error("Activation not created");

    await mailService.sendActivationMail(
      user.email,
      user.activation.activationLink
    );

    return {
      id: user.id,
      email: user.email,
    };
  }
}

export default new AuthService();
