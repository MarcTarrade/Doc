const Document = require('../models/Document');
const mongoose = require('mongoose');
const mediaController = require('./mediaController')

module.exports = {
    async getDocumentById(idUser){
        try{
            const documents = await Document.find({ user: new mongoose.Types.ObjectId(idUser) });
            return documents;
        }
        catch(e){
            throw e
        }
    },
    async createDocument(idUser, document){
        try{
            await Document.create({ ...document , user: new mongoose.Types.ObjectId(idUser) });
            return document;
        }
        catch(e){
            throw e
        }
    },
    async updateDocuments(documents){
        try{
            if(documents.documentsToDelete.length){
                await Document.deleteMany({ _id: documents.documentsToDelete.map(doc => new mongoose.Types.ObjectId(doc._id)) });
                for (const doc of documents.documentsToDelete) {
                    if(doc.path) await mediaController.deleteDocument(doc.path.split('/').pop());
                }
            }
            for (const doc of documents.documents) {
                await Document.updateOne({ _id: new mongoose.Types.ObjectId(doc._id) }, { ...doc, user: typeof doc.user === 'string' ? new mongoose.Types.ObjectId(doc.user) : doc.user }, { upsert: true });
            }
            return documents;
        }
        catch(e){
            throw e
        }
    },
    async deleteDocument(idDocument){
        try{
            await Document.deleteOne({ _id: new mongoose.Types.ObjectId(idDocument) });
            return;
        }
        catch(e){
            throw e
        }
    }
}