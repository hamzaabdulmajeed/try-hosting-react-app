// import express from 'express';
// import { nanoid } from 'nanoid'
// import { client } from '../mongodb.mjs'
// import { ObjectId } from 'mongodb'

// const db = client.db("cruddb");
// const col = db.collection("posts");

// let router = express.Router()



// // POST    /api/v1/post
// router.post('/post', async (req, res, next) => {
//     console.log('this is signup!', new Date());

//     if (
//         !req.body.title
//         || !req.body.text
//     ) {
//         res.status(403);
//         res.send(`required parameters missing, 
//         example request body:
//         {
//             title: "abc post title",
//             text: "some post text"
//         } `);
//         return;
//     }

//     try {
//         const insertResponse = await col.insertOne({
//             // _id: "7864972364724b4h2b4jhgh42",
//             title: req.body.title,
//             text: req.body.text,
//             createdOn: new Date()
//         });
//         console.log("insertResponse: ", insertResponse);

//         res.send('post created');
//     } catch (e) {
//         console.log("error inserting mongodb: ", e);
//         res.status(500).send('server error, please try later');
//     }
// })


// router.get('/posts', async (req, res, next) => {

//     const cursor = col.find({})
//         .sort({ _id: -1 })
//         .limit(100);

//     try {
//         let results = await cursor.toArray()
//         console.log("results: ", results);
//         res.send(results);
//     } catch (e) {
//         console.log("error getting data mongodb: ", e);
//         res.status(500).send('server error, please try later');
//     }
// })

// router.put('/post/:postId', async (req, res, next) => {

//   if (!ObjectId.isValid(req.params.postId)) {
//       res.status(403).send(`Invalid post id`);
//       return;
//   }

//   if (!req.body.text
//       && !req.body.title) {
//       res.status(403).send(`required parameter missing, atleast one key is required.
//       example put body: 
//       PUT     /api/v1/post/:postId
//       {
//           title: "updated title",
//           text: "updated text"
//       }
//       `)
//   }

//   let dataToBeUpdated = {};

//   if (req.body.title) { dataToBeUpdated.title = req.body.title }
//   if (req.body.text) { dataToBeUpdated.text = req.body.text }


//   try {
//       const updateResponse = await col.updateOne(
//           {
//               _id: new ObjectId(req.params.postId)
//           },
//           {
//               $set: dataToBeUpdated
//           });
//       console.log("updateResponse: ", updateResponse);

//       res.send('post updated');
//   } catch (e) {
//       console.log("error inserting mongodb: ", e);
//       res.status(500).send('server error, please try later');
//   }
// })


// // DELETE  /api/v1/post/:postId
// router.delete('/post/:postId', async (req, res, next) => {

//   if (!ObjectId.isValid(req.params.postId)) {
//       res.status(403).send(`Invalid post id`);
//       return;
//   }

//   try {
//       const deleteResponse = await col.deleteOne({ _id: new ObjectId(req.params.postId) });
//       console.log("deleteResponse: ", deleteResponse);
//       res.send('post deleted');
//   } catch (e) {
//       console.log("error deleting mongodb: ", e);
//       res.status(500).send('server error, please try later');
//   }


//   // const deleteResponse = await pcIndex.deleteOne(req.params.postId)
//   // console.log("deleteResponse: ", deleteResponse);

//   // res.send('post deleted');
// })

// export default router
// import { nanoid } from 'nanoid';
// const express = require('express');
// // const  nanoid  = require('nanoid');
// const { client } = require('./../mongodb.js');
// const { ObjectId } = require('mongodb');

// const db = client.db("cruddb");
// const col = db.collection("posts");

// const router = express.Router();

// // POST    /api/v1/post
// router.get('/post', async (req, res, next) => {
//     console.log('this is signup!', new Date());
//     res.send('this is post' + new Date());
//     if (
//         !req.body.title
//         || !req.body.text
//     ) {
//         res.status(403);
//         res.send(`required parameters missing, 
//         example request body:
//         {
//             title: "abc post title",
//             text: "some post text"
//         } `);
//         return;
//     }

//     try {
//         const insertResponse = await col.insertOne({
//             // _id: "7864972364724b4h2b4jhgh42",
//             title: req.body.title,
//             text: req.body.text,
//             createdOn: new Date()
//         });
//         console.log("insertResponse: ", insertResponse);

//         res.send('post created');
//     } catch (e) {
//         console.log("error inserting mongodb: ", e);
//         res.status(500).send('server error, please try later');
//     }
// });

// router.get('/posts', async (req, res, next) => {

//     const cursor = col.find({})
//         .sort({ _id: -1 })
//         .limit(100);

//     try {
//         let results = await cursor.toArray()
//         console.log("results: ", results);
//         res.send(results);
//     } catch (e) {
//         console.log("error getting data mongodb: ", e);
//         res.status(500).send('server error, please try later');
//     }
// });

// router.put('/post/:postId', async (req, res, next) => {

//   if (!ObjectId.isValid(req.params.postId)) {
//       res.status(403).send(`Invalid post id`);
//       return;
//   }

//   if (!req.body.text
//       && !req.body.title) {
//       res.status(403).send(`required parameter missing, atleast one key is required.
//       example put body: 
//       PUT     /api/v1/post/:postId
//       {
//           title: "updated title",
//           text: "updated text"
//       }
//       `);
//   }

//   let dataToBeUpdated = {};

//   if (req.body.title) { dataToBeUpdated.title = req.body.title }
//   if (req.body.text) { dataToBeUpdated.text = req.body.text }

//   try {
//       const updateResponse = await col.updateOne(
//           {
//               _id: new ObjectId(req.params.postId)
//           },
//           {
//               $set: dataToBeUpdated
//           });
//       console.log("updateResponse: ", updateResponse);

//       res.send('post updated');
//   } catch (e) {
//       console.log("error inserting mongodb: ", e);
//       res.status(500).send('server error, please try later');
//   }
// });

// // DELETE  /api/v1/post/:postId
// router.delete('/post/:postId', async (req, res, next) => {

//   if (!ObjectId.isValid(req.params.postId)) {
//       res.status(403).send(`Invalid post id`);
//       return;
//   }

//   try {
//       const deleteResponse = await col.deleteOne({ _id: new ObjectId(req.params.postId) });
//       console.log("deleteResponse: ", deleteResponse);
//       res.send('post deleted');
//   } catch (e) {
//       console.log("error deleting mongodb: ", e);
//       res.status(500).send('server error, please try later');
//   }

//   // const deleteResponse = await pcIndex.deleteOne(req.params.postId)
//   // console.log("deleteResponse: ", deleteResponse);

//   // res.send('post deleted');
// });

// module.exports = router;
const express = require('express');
const { client } = require('./../mongodb.js');
const { ObjectId } = require('mongodb');

const db = client.db("cruddb");
const col = db.collection("posts");

const router = express.Router();

// POST /api/v1/post
router.get('/post', (req, res, next) => {
    const { title, text } = req.body;

    const isValidRequest = title && text;

    try {
        if (isValidRequest) {
            col.insertOne({
                title,
                text,
                createdOn: new Date()
            }, (err, result) => {
                if (err) {
                    console.log("error inserting mongodb: ", err);
                    res.status(500).send('Server error, please try later');
                } else {
                    console.log("insertResponse: ", result);
                    res.send('Post created');
                }
            });
        } else {
            res.status(403).send(`Required parameters missing. Example request body: { "title": "abc post title", "text": "some post text" }`);
        }
    } catch (e) {
        console.log("error inserting mongodb: ", e);
        res.status(500).send('Server error, please try later');
    }
});

// GET /api/v1/posts
router.get('/posts', (req, res, next) => {
    try {
        const cursor = col.find({})
            .sort({ _id: -1 })
            .limit(100);

        cursor.toArray((err, results) => {
            if (err) {
                console.log("error getting data from mongodb: ", err);
                res.status(500).send('Server error, please try later');
            } else {
                console.log("results: ", results);
                res.send(results);
            }
        });
    } catch (e) {
        console.log("error getting data from mongodb: ", e);
        res.status(500).send('Server error, please try later');
    }
});

// PUT /api/v1/post/:postId
router.put('/post/:postId', (req, res, next) => {
    const { title, text } = req.body;
    const postId = req.params.postId;

    const isValidRequest = ObjectId.isValid(postId) && (title || text);

    try {
        if (isValidRequest) {
            col.updateOne(
                { _id: new ObjectId(postId) },
                { $set: { title, text } },
                (err, result) => {
                    if (err) {
                        console.log("error updating mongodb: ", err);
                        res.status(500).send('Server error, please try later');
                    } else {
                        console.log("updateResponse: ", result);
                        res.send('Post updated');
                    }
                }
            );
        } else {
            res.status(403).send(`Invalid request. At least one of "title" or "text" is required.`);
        }
    } catch (e) {
        console.log("error updating mongodb: ", e);
        res.status(500).send('Server error, please try later');
    }
});

// DELETE /api/v1/post/:postId
router.delete('/post/:postId', (req, res, next) => {
    const postId = req.params.postId;

    const isValidRequest = ObjectId.isValid(postId);

    try {
        if (isValidRequest) {
            col.deleteOne({ _id: new ObjectId(postId) }, (err, result) => {
                if (err) {
                    console.log("error deleting mongodb: ", err);
                    res.status(500).send('Server error, please try later');
                } else {
                    console.log("deleteResponse: ", result);
                    res.send('Post deleted');
                }
            });
        } else {
            res.status(403).send(`Invalid post id`);
        }
    } catch (e) {
        console.log("error deleting mongodb: ", e);
        res.status(500).send('Server error, please try later');
    }
});

module.exports = router;
