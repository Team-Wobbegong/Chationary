CREATE TABLE "profiles" (
	"userID" serial NOT NULL,
	"username" VARCHAR(255) NOT NULL UNIQUE,
	"passkey" VARCHAR(255) NOT NULL UNIQUE,
	"date_created" DATE NOT NULL,
	"country" VARCHAR(255) NOT NULL,
	"email" TEXT NOT NULL,
	CONSTRAINT "profiles_pk" PRIMARY KEY ("userID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Messages" (
	"messageID" serial NOT NULL,
	"message_body" TEXT NOT NULL,
	"date_posted" DATE NOT NULL,
	"time_posted" TIME NOT NULL,
	"userID_fk" integer NOT NULL UNIQUE,
	"chatroomID_fk" integer NOT NULL UNIQUE,
	CONSTRAINT "Messages_pk" PRIMARY KEY ("messageID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Chatrooms" (
	"chatroomID" serial NOT NULL,
	"chatroom_name" VARCHAR(255) NOT NULL,
	"language" VARCHAR(255) NOT NULL,
	CONSTRAINT "Chatrooms_pk" PRIMARY KEY ("chatroomID")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Messages" ADD CONSTRAINT "Messages_fk0" FOREIGN KEY ("userID_fk") REFERENCES "profiles"("userID");
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_fk1" FOREIGN KEY ("chatroomID_fk") REFERENCES "Chatrooms"("chatroomID");


