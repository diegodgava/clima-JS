const weatherCodeToString: {
    [key: number]: {
        icon: string
        label: string
    };
} = {
    0: {
        icon: "c01d",
        label: "Céu Limpo",
    },
    1: {
        icon: "c02d",
        label: "Céu limpo com poucas nuvens",
    },
    2: {
        icon: "c03d",
        label: "Parcialmente Nublado",
    },
    3: {
        icon: "c04d",
        label: "Nublado",
    },
    45: {
        icon: "s05d",
        label: "Névoa",
    },
    48: {
        icon: "s05d",
        label: "Nevoeiro de depósito",
    },
    51: {
        icon: "d01d",
        label: "Chuviscando",
    },
    53: {
        icon: "d01d",
        label: "Chuviscando",
    },
    55: {
        icon: "d01d",
        label: "Chuviscando",
    },
    56: {
        icon: "d01d",
        label: "Garoa gelada",
    },
    57: {
        icon: "d01d",
        label: "Garoa gelada",
    },
    61: {
        icon: "r01d",
        label: "Chuva",
    },
    63: {
        icon: "r01d",
        label: "Chuva",
    },
    65: {
        icon: "r01d",
        label: "Chuva",
    },
    66: {
        icon: "f01d",
        label: "Chuva gelada",
    },
    67: {
        icon: "f01d",
        label: "Chuva gelada",
    },
    71: {
        icon: "s02d",
        label: "Neve",
    },
    73: {
        icon: "s02d",
        label: "Neve",
    },
    75: {
        icon: "s02d",
        label: "Neve",
    },
    77: {
        icon: "s02d",
        label: "Grãos de neve",
    },
    80: {
        icon: "r02d",
        label: "Pancadas de chuva",
    },
    81: {
        icon: "r02d",
        label: "Pancadas de chuva",
    },
    82: {
        icon: "r02d",
        label: "Pancadas de chuva",
    },
    85: {
        icon: "s01d",
        label: "Pancadas de neve",
    },
    86: {
        icon: "s01d",
        label: "Pancadas de neve",
    },
    95: {
        icon: "t04d",
        label: "Tempestade",
    },
    96: {
        icon: "t04d",
        label: "Tempestade",
    },
    99: {
        icon: "t04d",
        label: "Tempestade",
    },
}

export default weatherCodeToString