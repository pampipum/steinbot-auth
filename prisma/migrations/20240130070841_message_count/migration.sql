-- CreateTable
CREATE TABLE "user_message_count" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "messageCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_message_count_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_message_count_userId_key" ON "user_message_count"("userId");

-- AddForeignKey
ALTER TABLE "user_message_count" ADD CONSTRAINT "user_message_count_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
