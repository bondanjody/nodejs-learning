import winston from "winston";

test("transport level", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log",
      }),
      new winston.transports.File({
        level: "error",
        filename: "application-error.log",
        // Yang masuk ke sini hanya yang error saja
      }),
    ],
  });

  logger.info("Hello Info!");
  logger.info("Hello Info!");
  logger.error("Hello Error!");
});

// NOTE : transport level juga bisa digunakan pada Console(tidak hanya pada File)
