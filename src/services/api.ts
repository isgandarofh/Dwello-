export async function getServicesContent() {
    try {
        const response = await fetch("/data/services.json");
        return await response.json();
    } catch (err) {
        console.log(err + "err");
    }
}

export async function getResidenceCards() {
    try {
        const response = await fetch("/data/residence.json");
        return await response.json()
    } catch (err) {
        console.log(err + "err");
    }
}

export async function getAgentCards() {
    try {
        const response = await fetch("/data/agents.json");
        return await response.json()
    } catch (err) {
        console.log(err + "err");
    }
}