const Estate = require('../models/Estate');
const Document = require('../models/Document');
const Tenant = require('../models/Tenant');
const mongoose = require('mongoose');

module.exports = {
    async getEstateListByUser(idUser){
        try{
            const estateList = await Estate.find({ user: new mongoose.Types.ObjectId(idUser) });
            return estateList;
        }
        catch(e){
            throw e
        }
    },
    async getEstateInfo(id){
        try{
            const estate = await Estate.findById(id).populate('current_tenant');
            const documents = await Document.find({ tenant: new mongoose.Types.ObjectId(estate.current_tenant) });
            return {
                _id: estate._id,
                name: estate.name,
                old_tenants: estate.old_tenants,
                user: estate.user,
                documents: documents.filter(doc => doc.type === 'estate'),
                current_tenant: {
                    _id: estate.current_tenant._id,
                    name: estate.current_tenant.name,
                    documents: documents.filter(doc => doc.type === 'file')
                }
            }
        }
        catch(e){
            throw e
        }
    },
    async updateEstate(id, estate){
        await Estate.updateOne({ _id: new mongoose.Types.ObjectId(id) }, {
            name: estate.estate.name,
            user: new mongoose.Types.ObjectId(estate.estate.user),
            current_tenant: new mongoose.Types.ObjectId(estate.estate.current_tenant._id),
            old_tenants: estate.estate.old_tenants,
            image: estate.estate.image
        });
        if(estate.documentsToDelete.estate.length){
            await Document.deleteMany({ _id: estate.documentsToDelete.estate.map(doc => new mongoose.Types.ObjectId(doc._id)) });
            for (const doc of estate.documentsToDelete.estate) {
                if(doc.path) await mediaController.deleteDocument(doc.path.split('/').pop());
            }
        }
        if(estate.documentsToDelete.tenant.length){
            await Document.deleteMany({ _id: estate.documentsToDelete.tenant.map(doc => new mongoose.Types.ObjectId(doc._id)) });
            for (const doc of estate.documentsToDelete.tenant) {
                if(doc.path) await mediaController.deleteDocument(doc.path.split('/').pop());
            }
        }
        for (const doc of estate.estate.documents) {
            await Document.updateOne({ _id: new mongoose.Types.ObjectId(doc._id) }, { ...doc, user: typeof doc.user === 'string' ? new mongoose.Types.ObjectId(doc.user) : doc.user, tenant: typeof doc.tenant === 'string' ? new mongoose.Types.ObjectId(doc.tenant) : doc.tenant }, { upsert: true });
        }
        for(const doc of estate.estate.current_tenant.documents){
            await Document.updateOne({ _id: new mongoose.Types.ObjectId(doc._id) }, { ...doc, user: typeof doc.user === 'string' ? new mongoose.Types.ObjectId(doc.user) : doc.user, tenant: typeof doc.tenant === 'string' ? new mongoose.Types.ObjectId(doc.tenant) : doc.tenant }, { upsert: true });
        }
    },
    async createEstate(estate){
        try{
            const newTenant = await Tenant.create({ name: estate.current_tenant.name });
            await Estate.create({
                name: estate.name,
                user: new mongoose.Types.ObjectId(estate.user),
                current_tenant: new mongoose.Types.ObjectId(newTenant._id),
                image: estate.image,
                old_tenants: []
            });
            await Document.create(estate.current_tenant.documents);
            await Document.create(estate.documents);

        }
        catch(e){
            throw e
        }
    }
}