/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_owner_id_fkey";

-- DropTable
DROP TABLE "Event";

-- CreateTable
CREATE TABLE "events" (
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

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
