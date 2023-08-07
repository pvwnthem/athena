'use server'

import { Snippet } from "@/types/snippet.type";
import SnippetModel from "@/models/snippet";
import { connect } from "@/lib/mongo";

export async function createSnippet(snippet: Snippet) {
    await connect();
    
    const result = await SnippetModel.create(snippet);
    return result;
}