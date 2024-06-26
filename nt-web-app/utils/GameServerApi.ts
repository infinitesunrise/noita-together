const apiBase = (() => {
    const prefix = process.env.NEXT_PUBLIC_LOBBY_SERVER_API_URL_BASE || 'https://dev.noitatogether.com:4444/api'
    return prefix.endsWith('/') ? prefix : `${prefix}/`
})();

export type StatsRowValue = string | number

export interface Stats {
    id: string
    name: string
    headings: string[]
    rows: (StatsRowValue[])[]
}

const getStatsUrl = (id: string, sessionId: string) => {
    return `${apiBase}stats/${id}/${sessionId}`
}

const healthcheckUrl =`${apiBase}health`;

export {
    getStatsUrl,
    healthcheckUrl,
}