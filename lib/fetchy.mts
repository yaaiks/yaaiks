/*

The default fetch function wraps network errors in a TypeError, 
which makes it difficult to determine is it the true TypeError or just yet another network error. 
This function addresses that issue by unwrapping the cause  and re-throwing it.

*/

export async function fetchy(input: string | URL | Request, init?: RequestInit): Promise<Response> {
    try {
        return await fetch(input, init)
    } catch (e) {
        throw e?.cause ? e.cause : e
    }
}
  
