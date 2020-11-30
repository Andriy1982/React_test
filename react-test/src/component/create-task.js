import { LoremIpsum } from 'lorem-ipsum';
import { v4 as uuidv4 } from 'uuid';
// import { uuid } from 'uuidv4';

const lorem = new LoremIpsum();


export default function CreateTask() {
  return {
    id: uuidv4(),
    text: lorem.generateSentences(5),
    completed: false,
  };
}
