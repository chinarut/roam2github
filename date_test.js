// https://www.programiz.com/javascript/online-compiler

BACKUP_JSON="False"
BACKUP_EDN="TRUE"
BACKUP_MARKDOWN="true"

const backup_types = [
    { type: "JSON", backup: BACKUP_JSON },
    { type: "EDN", backup: BACKUP_EDN },
    { type: "Markdown", backup: BACKUP_MARKDOWN }
].map(f => {
    (f.backup === undefined || f.backup.toLowerCase() === 'true') ? f.backup = true : f.backup = false
    return f
})

for (const f of backup_types) {
    if (f.backup) {
        console.log('Export', f.type, ':', f.backup)
    }
}
