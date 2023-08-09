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
            <div className="font-gfs-didot w-screen h-screen flex flex-col items-center justify-center">
                <h1 className='font-semibold text-2xl'>Publish a Snippet</h1>
                <div className='w-1/2 h-1 bg-red-800 rounded-full my-2'></div>
                <form onSubmit={handleSubmit} className='md:w-1/2 flex flex-col rounded py-6 px-24 shadow-lg space-y-2 items-center justify-center'>
                    <label htmlFor="code" className='text-xl self-start font-semibold'>Code</label>
                    <textarea className="h-32 w-full border border-red-800 rounded" name="code" />
                    <label htmlFor="code" className='text-xl self-start font-semibold'>Language</label>
                    <select id="language" name="language" className="w-full self-start shadow-md rounded bg-white py-2 px-2 text-red-800">
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="ruby">Ruby</option>
                    </select>
                    <button type="submit" className='bg-red-800 py-2 px-8 text-white rounded-md'>Submit</button>
                </form>
            </div>
        </>
    )
}