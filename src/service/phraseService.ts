import db, { Phrase } from "@/db";

function getRandomNumber(max:number){
  return Math.round(Math.random() * max);
}

function getRandomPhrase(db: Phrase[]){
  const randomNumber = getRandomNumber(db.length)
  return db[randomNumber]
}

function getPhraseFilteredByTags(db: Phrase[], tags: string[]){
  const filteredDbByTags = db.filter(row => row.tags.some(tag=> tags.includes(tag)))
  return getRandomPhrase(filteredDbByTags);
}


class PhraseService {
  private static db = db;

  static getRandomPhrase (){
    return getRandomPhrase(this.db)

  }

  static getPhraseFilteredByTags(tags: string[]){
    return getPhraseFilteredByTags(this.db, tags)
  }
}

export default PhraseService;