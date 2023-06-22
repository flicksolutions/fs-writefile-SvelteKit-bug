export const prerender = true;
import fs from 'fs/promises';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const data = await (await fetch('https://picsum.photos/200.jpg')).arrayBuffer();
	await fs.writeFile('static/pic.jpg', Buffer.from(data));
	return json({ html: '<img alt="picsum" src="/pic.jpg" />' });
}
