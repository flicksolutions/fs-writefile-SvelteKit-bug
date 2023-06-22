export const prerender = true;

import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const post = await fetch(`/proxy.json`).then((res) => res.json());

	return post;
}
