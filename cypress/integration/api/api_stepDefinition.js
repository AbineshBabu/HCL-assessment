/// <reference types="cypress"/>

import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const baseurl = 'https://jsonplaceholder.typicode.com/posts';
const get_data = require('../../fixtures/get.json');
const post_data = require('../../fixtures/post.json');
const put_data = require('../../fixtures/put.json');

Given('user retrives the existing resource', () => {
    cy.request({
        method: 'GET',
        url: baseurl
    }).then((res)=>{
        expect(res.status).to.eq(200);
        // expect(JSON.stringify(res)).to.equals(JSON.stringify(get_data));
    })
})

When('user creates a resource', () => {
    cy.request({
        method: 'POST',
        url: baseurl,
        body: {
            title: post_data.title,
            body: post_data.body,
            userId: post_data.userId
        }
    }).then((res)=>{
        expect(res.status).to.eq(201);
        expect(res.body.title).to.equal(post_data.title);
        expect(res.body.body).to.equal(post_data.body);
        expect(res.body.userId).to.equal(post_data.userId);
    })
})

When('user update the existing resource', () => {
    cy.request({
        method: 'PUT',
        url: baseurl+'/'+post_data.userId,
        body: {
            title: put_data.title,
            body: put_data.body,
            userId: put_data.userId
        }
    }).then((res)=>{
        expect(res.status).to.eq(200);
        expect(res.body.title).to.equal(put_data.title);
        expect(res.body.body).to.equal(put_data.body);
        expect(res.body.userId).to.equal(put_data.userId);
        
    })
})

Then('user deletes the resouce', () => {
    cy.request({
        method: 'DELETE',
        url: baseurl+'/'+post_data.userId
    }).then((res)=>{
        expect(res.status).to.eq(200);
    })
})