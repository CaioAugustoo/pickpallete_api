-- CreateTable
CREATE TABLE `pallete` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `color1` VARCHAR(191) NOT NULL,
    `color2` VARCHAR(191) NOT NULL,
    `color3` VARCHAR(191) NOT NULL,
    `color4` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `pallete_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
