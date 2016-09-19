var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Test Schema
var Test = new Schema({
  testId: Number,
  sections: [{
      sectionId: Number,
      purpose: String,
      content: String,
      parts: [{
        partId: Number,
        purpose: String,
        content: String,
        questions: [{
          questionId: Number,
          purpose: String,
          type: {
            type: String,
            enum: ['Single choice, Multiple choice, Fill in']
          },
          content: String,
          answers: [{
            text: String
          }]
        }]
      }]
    }]
},{
  collection: 'contest'
});

module.exports = mongoose.model('Test', Test);
