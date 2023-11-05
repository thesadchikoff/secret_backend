-- CreateEnum
CREATE TYPE "roles" AS ENUM ('USER', 'EVENT_MANAGER', 'SUPPORT', 'MODERATOR', 'ADMIN', 'SUPERADMIN');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "middle_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "activate_code" INTEGER NOT NULL,
    "is_premium" BOOLEAN NOT NULL DEFAULT false,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "role" "roles" NOT NULL DEFAULT 'USER',
    "event_block" BOOLEAN NOT NULL DEFAULT false,
    "is_feedback" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "event_name" TEXT NOT NULL,
    "event_banner" TEXT NOT NULL,
    "event_image" TEXT NOT NULL,
    "event_image_thumbnail" TEXT NOT NULL,
    "event_location" TEXT NOT NULL,
    "event_place" TEXT NOT NULL,
    "is_free" BOOLEAN NOT NULL DEFAULT true,
    "event_price" INTEGER NOT NULL DEFAULT 0,
    "owner_id" TEXT NOT NULL,
    "event_description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
