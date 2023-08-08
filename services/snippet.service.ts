'use server'

import { Snippet } from "@/types/snippet.type";
import SnippetModel from "@/models/snippet";
import { connect } from "@/lib/mongo";
import crypto from 'crypto';

export async function createSnippet(snippet: Snippet) {
    await connect();
    
    snippet.id = crypto.randomBytes(32).toString('hex');

    const result = await SnippetModel.create(snippet);
    return JSON.parse(JSON.stringify(result));
}

export async function getAllSnippets() {
    await connect();

    const result = await SnippetModel.find();
    return JSON.parse(JSON.stringify(result));
}

export async function getSnippet(id: string) {
    await connect();

    const result = await SnippetModel.findOne({id});
    return JSON.parse(JSON.stringify(result));
}