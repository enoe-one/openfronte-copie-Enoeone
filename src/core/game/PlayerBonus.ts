// src/core/game/PlayerBonus.ts

// Liste des joueurs DEV
const DEV_PLAYERS = ["[dev] Anone7809"];

// Vérifie si le joueur est un DEV
export function isDevPlayer(player: any): boolean {
    return DEV_PLAYERS.includes(player.username);
}

// Applique les bonus
export function applyDevBonuses(player: any) {
    if (!isDevPlayer(player)) return;

    // Gold bonus
    player.gold += 100000; // tu peux ajuster le montant

    // Troupes bonus
    player.troops += 10000; // tu peux ajuster le montant

    // Augmentation de la taille de réserve
    if (typeof player.reserveCapacity === "number") {
        player.reserveCapacity += 5000; // tu peux ajuster le montant
    }

    console.log(`[DEV BONUS] Applied to ${player.username}`);
}
