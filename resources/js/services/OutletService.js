import API from "../utils/api";

const OutletService = {
    getOutlets(page, search) {
        return API.get(`/outlets?page=${page}&q=${search}`);
    },

    getOutlet(id) {
        return API.get(`/outlets/${id}`);
    },

    createOutlet(payload) {
        return API.post(`/outlets`, payload);
    },

    updateOutlet(id, payload) {
        return API.put(`/outlets/${id}`, payload);
    },

    deleteOutlet(id) {
        return API.delete(`outlets/${id}`);
    },
    getOutletOptions() {
        return API.get(`/options/outlets`);
    },
};

export default OutletService;
