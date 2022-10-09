/// <reference types="cypress"/>
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const baseurl = 'https://jsonplaceholder.typicode.com/posts';
const getData = require('../../fixtures/get.json');
const postData = require('../../fixtures/post.json');
const putData = require('../../fixtures/put.json');

Given('user retrives the existing resource', () => {
    cy.request({
        method: 'GET',
        url: baseurl
    }).then((res) => {
        expect(res.status).to.eq(200);
        expect(JSON.stringify(res.body)).to.equals(JSON.stringify(getData));
    })
})

When('user creates a resource', () => {
    cy.request({
        method: 'POST',
        url: baseurl,
        body: {
            title: postData.title,
            body: postData.body,
            userId: postData.userId
        }
    }).then((res) => {
        expect(res.status).to.eq(201);
        expect(res.body.title).to.equal(postData.title);
        expect(res.body.body).to.equal(postData.body);
        expect(res.body.userId).to.equal(postData.userId);
    })
})

When('user update the existing resource', () => {
    cy.request({
        method: 'PUT',
        url: baseurl + '/' + postData.userId,
        body: {
            title: putData.title,
            body: putData.body,
            userId: putData.userId
        }
    }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.title).to.equal(putData.title);
        expect(res.body.body).to.equal(putData.body);
        expect(res.body.userId).to.equal(putData.userId);
    })
})

Then('user deletes the resouce', () => {
    cy.request({
        method: 'DELETE',
        url: baseurl + '/' + postData.userId
    }).then((res) => {
        expect(res.status).to.eq(200);
    })
})