// GET
export const getNote = async () => {
    try {
        const response = await fetch('http://localhost:7070/posts');
        if (!response.ok) {
            throw new Error('error get');
        }
        const result = await response.json();
        return result;
    } catch (er) {
        console.error('getNote error: ' + er);
    }
}

// GET id
export const getNoteId = async (id) => {
    try {
        const response = await fetch(`http://localhost:7070/posts/${id}`);
        if (!response.ok) {
            throw new Error('error get');
        }
        const result = await response.json();
        return result;
    } catch (er) {
        console.error('getNote error: ' + er);
    }
}

// NEW
export const postNote = async (note) => {
    try {
        const response = await fetch('http://localhost:7070/posts', {
            method: 'POST',
            body: JSON.stringify({
                id: note.id,
                autor: note.autor,
                content: note.content,
                created: note.created,
            }),
            headers: { 'Content-type': 'application/json;charset=UTF-8' }
        });
        /*if (!response.ok) {
            throw new Error('error post')
        }
        const result = response.json();
        return result;*/
    } catch (er) {
        console.error('postNote error: ' + er);
    }
}

// EDIT
export const editNote = async (note) => {
    try {
        const response = await fetch('http://localhost:7070/posts', {
            method: 'PUT',
            body: JSON.stringify(note),
            noteId: note.id,
            headers: {"Content-type": "application/json;charset=UTF8"}
        });
        /*if (!response.ok) {
            throw new Error('error edit');
        }
        const result = response.json();
        return result;*/
    } catch (er) {
        console.error('editNote error: ' + er);
    }
}

// DELETE
export const deleteNote = async (id) => {
    try {
        const response = await fetch(`http://localhost:7070/posts/${id}`, {
            method: 'DELETE'
        });
        /*if (!response.ok) {
            throw new Error('error delete');
        }
        const result = response.json();
        return result;*/
    } catch (er) {
        console.log('deleteNote error: ' + er);
    }
}