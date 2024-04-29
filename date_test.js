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

// https://www.programiz.com/javascript/online-compiler

BACKUP_JSON="True"
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

weekday = new Date().toLocaleString('en-us', {  weekday: 'long' })
weekly = (weekday == "Sunday")

for (const f of backup_types) {
    if (f.type == "EDN" || f.type == "JSON") {
        if (!weekly && f.backup) {
            console.log("not weekly. skipping", f.type)
            continue
        }
    }
    if (f.backup) {
        console.log('Export', f.type, ':', f.backup)
    }
}
