// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom.js';

// Implement the initializeRooms function
function initializeRooms() {
    // Create an array of ClassRoom objects with sizes 19, 20, and 34
    const rooms = [
        new ClassRoom(19),
        new ClassRoom(20),
        new ClassRoom(34)
    ];
    return rooms;
}

// Export the initializeRooms function
export default initializeRooms;

