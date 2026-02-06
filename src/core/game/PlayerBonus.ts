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
    if (typeof player.gold === "number") {
        player.gold += 100000;
    }

    // Troupes bonus
    if (typeof player.troops === "number") {
        player.troops += 5000;
    }

    // Augmentation de la capacité de réserve (si existante)
    if (typeof player.reserveCapacity === "number") {
        player.reserveCapacity += 5000;
    }

    console.log(`[DEV BONUS] Applied to ${player.username}`);
}
