export type StatusMessage = {
  statusCode: number,
  body?: any,
  statusMessage?: string,
  error?: any,
};

export type User = {
  id: string,
  username: string,
  email: string,
  passwordHash: string,
  creationTimestamp: Date,
};

export type PublicUser = {
  uuid: string,
  email: string,
};

export type SessionTokens = {
  accessToken: string,
  refreshToken: string,
  sessionId: string,
};

export type Session = {
  userId: string,
  sessionId: string,
  startTimestamp: Date,
  endTimestamp?: Date,
  accessToken: string,
  csrfToken: string,
  isActive: boolean,
  ipAddress: string,
};

export type JSONResponse = {
  status: "success" | "fail";
  data?: any;
  error?: any;
}