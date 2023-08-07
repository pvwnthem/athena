'use client'
import { createSnippet } from '@/services/snippet.service';
import { Snippet } from '@/types/snippet.type';
import React from 'react'

export default function Page() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const code = formData.get("code");
        const language = formData.get("language");
        createSnippet({ content: code as string, language: language as string } as Snippet)
      }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="code" />
                    <input type="text" name="language" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}