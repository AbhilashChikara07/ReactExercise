// src/data/repository/monsterRepository.js
import apiClient from "../remote/apiClient";
import { ApiEndpoints } from "../remote/apiEndpoints";

export const MonsterRepository = {
    getMonsters: async () => {
        const response = await apiClient.get(ApiEndpoints.USERS);
        return response.data;
    },
};