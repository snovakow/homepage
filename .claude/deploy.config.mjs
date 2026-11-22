// This project's additions to the /deploy skill. Every other site is a folder under the machine's live
// folders, which git config deploy.liveRoot says where to find; the homepage is that root itself, which
// liveName can't name, so locate returns the root.
//
// The build keeps its own files in homepage/, beside index.html and favicon.ico, so that is its assets
// folder: the only folder a deploy removes older files from, which keeps the other sites' folders out of it.
import { execFileSync } from 'node:child_process';

export default {
	assetsDir: 'homepage',

	locate({ repoRoot, options }) {
		// The deploy calls this even when --live names the folder, and that run needs no root
		if (options.live) return {};
		let liveDir = '';
		try {
			liveDir = execFileSync('git', ['config', '--get', 'deploy.liveRoot'], { cwd: repoRoot, encoding: 'utf8' }).trim();
		} catch { /* unset */ }
		if (!liveDir) throw new Error('this machine doesn\'t say where its live folders are, and the homepage is their root. Set it once, then run this again:\n    git config --global deploy.liveRoot <dir>');
		return { liveDir };
	},
};
