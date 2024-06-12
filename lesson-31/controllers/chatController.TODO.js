// controllers/chatController.js
"use strict";

const Message = require("../models/Message");

/**
 * Listing 30.4 (p. 445)
 * chatController.js에서의 채팅 소켓 커넥션 처리
 */
module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected");

    /**
     * Listing 31.11 (p. 460)
     * 최근 메시지 읽어들이기
     */

    /**
     * Listing 31.2 (p. 451)
     */

    /**
     * Listing 31.5 (p. 453)
     * 소켓 데이터의 수신
     */

    /**
     * Listing 31.10 (p. 459)
     * message 저장
     */
  });
};
