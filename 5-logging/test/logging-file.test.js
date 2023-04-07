import winston from "winston";

test("logging to file", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log",
      }),
      new winston.transports.File({
        filename: "bondan.log",
      }),
    ],
  });

  logger.info("Hello World!");
  logger.info("Hello World!");
  logger.info("Hello World!");
});
// NOTE : tidak hanya melakukan logging ke Console tetapi juga ke File, dan kita juga bisa melog ke lebih dari 1 file
