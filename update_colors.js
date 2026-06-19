import fs from 'fs';

const dir = 'h:/Gym Landing Page/src';
function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walk(dir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    content = content.replace(/gym-orange/g, 'gym-gold');
    content = content.replace(/gym-black/g, 'gym-navy');
    content = content.replace(/gym-charcoal/g, 'gym-navy-light');
    content = content.replace(/orange-600/g, 'yellow-600');
    content = content.replace(/orange-400/g, 'yellow-400');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
