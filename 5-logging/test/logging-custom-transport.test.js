import winston from "winston";
import TransportStream from "winston-transport";

test("logging with custom transport", () => {
  // Membuat transport kita sendiri
  class MyTransport extends TransportStream {
    constructor(option) {
      super(option);
    }

    log(info, next) {
      console.log(
        `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`
      );
      next();
    }
  }
  const logger = winston.createLogger({
    level: "info",
    transports: [new MyTransport({})],
  });

  logger.info("Hello Info!");
  logger.error("Hello Error!");
  logger.warn("Hello Warning!");
});
