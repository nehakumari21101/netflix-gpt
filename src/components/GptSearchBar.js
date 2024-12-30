import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie Recommendation system suggest some movies for the query:" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, koi mil gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
    <div className="pt-[45%] sm:pt-[30%] md:pt-[15%] flex justify-center  h-16 items-center ">
      <form
        action=""
        className="  bg-black w-[90%] md:w-[55%] p-5 border"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].placeholder}
          className=" mx-2 w-[70%] h-11 pl-1 md:pl-5"
        />
        <button
          className="bg-red-600 rounded-lg text-white text-bold w-[20%] h-11  ml-1 md:ml-5"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

// {
//   "page": 1,
//   "results": [
//     {
//       "adult": false,
//       "backdrop_path": "/mIisDBJVAsugwReRoeAuWIDnc9S.jpg",
//       "genre_ids": [
//         35,
//         80
//       ],
//       "id": 21614,
//       "original_language": "hi",
//       "original_title": "Hera Pheri",
//       "overview": "Three unemployed men find the answer to all their money problems when they receive a call from a kidnapper. However, things do not go as planned.",
//       "popularity": 10.499,
//       "poster_path": "/23MKGUPT5laTStim4TaGhfgSltu.jpg",
//       "release_date": "2000-03-31",
//       "title": "Hera Pheri",
//       "video": false,
//       "vote_average": 7,
//       "vote_count": 254
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/vr4fskAEI91XoBNMxEiW8Tx3Q6g.jpg",
//       "genre_ids": [
//         28,
//         35,
//         18
//       ],
//       "id": 170645,
//       "original_language": "hi",
//       "original_title": "Hera Pheri",
//       "overview": "Two con men, Vijay and Ajay, manage to hoodwink a number of wealthy people as well as Police Commissioner Khanna. Their lives undergo many changes, after a caper at a casino, where Vijay is recognized by a gangster named P.K., who decides to separate the two friends by claiming that Ajay is his long-lost son; insinuating that Vijay has not been completely forthright with Ajay; and implicating him in the murder of a male named Mac. Written by rAjOo (gunwanti@hotmail.com)",
//       "popularity": 1.131,
//       "poster_path": "/hUlekD8DKi7GBTqy5HIrVovnU8i.jpg",
//       "release_date": "1976-10-01",
//       "title": "Hera Pheri",
//       "video": false,
//       "vote_average": 5.9,
//       "vote_count": 8
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/thcoTAEBIk9EiDscqAOV8uZCHVl.jpg",
//       "genre_ids": [
//         18,
//         35
//       ],
//       "id": 682856,
//       "original_language": "pa",
//       "original_title": "ਤੇਰੀਆਂ ਮੇਰੀਆਂ ਹੇਰਾ ਫੇਰੀਆਂ",
//       "overview": "Lucky is a young taxi driver whose dream of moving to the UK is thwarted by financial constraints. When he falls for Paali, whose father proposes a fake marriage to facilitate her UK immigration, Lucky agrees, hoping to win her love",
//       "popularity": 1.424,
//       "poster_path": "/oZBIvd8aBFV8CnSQGwEIL3QDTIu.jpg",
//       "release_date": "2024-06-21",
//       "title": "Teriya Meriya Hera Pheriyan",
//       "video": false,
//       "vote_average": 0,
//       "vote_count": 0
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/802ronXWzXTOlue05ZBTZqSTSFH.jpg",
//       "genre_ids": [
//         35
//       ],
//       "id": 20359,
//       "original_language": "hi",
//       "original_title": "Phir Hera Pheri",
//       "overview": "Raju,  Shyam and Baburao are living happily after having risen from rags to riches. However, they lose it all after falling victim to a chit fund scam due to their greed for more money. Soon, they find themselves in new mess and encounter eccentric and dangerous characters in their quest for a shortcut to riches again.",
//       "popularity": 11.562,
//       "poster_path": "/c1Mvyd983ZyrU5Vf2aKEe6WncSq.jpg",
//       "release_date": "2006-06-09",
//       "title": "Phir Hera Pheri",
//       "video": false,
//       "vote_average": 6.583,
//       "vote_count": 120
//     },
//     {
//       "adult": false,
//       "backdrop_path": null,
//       "genre_ids": [
//         35
//       ],
//       "id": 998131,
//       "original_language": "bn",
//       "original_title": "হেরা ফেরী",
//       "overview": "'Hera Pheri' is the story of a con man Ronnie and a con woman Bonny who cheat people for money. But it's gradually revealed that Bonny wants money to build a mental asylum where mentally unstable people like her mother can be treated. On a fateful night years back criminal named Bhagare Shashthi attacked Bata Krishna's jewelry shop and on their way back they had killed Bonny's father and charged young Ronnie of the murder. After the truth is revealed Bonny and Ronnie start working together for money. One day Bata Krishna receives a ransom call from Sashti meant for Haladhar Manna. Signal, Ronnie's aide decides to pose as kidnappers and call Manna. They demand double the amount demanded by kidnappers. After a lot of complications the child is rescued, Ronnie gets the money and Sashti gets killed.",
//       "popularity": 0.301,
//       "poster_path": "/eS2phxS0NMw1QhiXe39TajANnGl.jpg",
//       "release_date": "2016-02-04",
//       "title": "Hera Pheri",
//       "video": false,
//       "vote_average": 0,
//       "vote_count": 0
//     },
//     {
//       "adult": false,
//       "backdrop_path": null,
//       "genre_ids": [
//         35
//       ],
//       "id": 393429,
//       "original_language": "hi",
//       "original_title": "Hera Pheri 3",
//       "overview": "",
//       "popularity": 2.552,
//       "poster_path": null,
//       "release_date": "",
//       "title": "Hera Pheri 3",
//       "video": false,
//       "vote_average": 0,
//       "vote_count": 0
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/mF52lhsQMXQmZIId6CqQo2FJfux.jpg",
//       "genre_ids": [
//         35,
//         28
//       ],
//       "id": 38628,
//       "original_language": "te",
//       "original_title": "ఢీ",
//       "overview": "Babloo (Vishnu) likes to have fun and is always getting in trouble so his father (Chandramohan) gets him a job with Shanker Goud (Srihari). Shanker Goud and Bhallu are rivals and Bhallu is determined to kill Shanker Goud's sister Pooja (Genelia D'Souza). Babloo falls in love with Pooja but Shanker is planning an arranged marriage for her with Ajay (Akash) so Babloo and Pooja elope. The rest of the story is about how Babloo saves Pooja from Bhallu.",
//       "popularity": 1.73,
//       "poster_path": "/pi39lj9U806VIj6EHUScSTpjGLt.jpg",
//       "release_date": "2007-04-13",
//       "title": "Dhee",
//       "video": false,
//       "vote_average": 6.3,
//       "vote_count": 9
//     },
//     {
//       "adult": false,
//       "backdrop_path": null,
//       "genre_ids": [
//         35,
//         18,
//         10751
//       ],
//       "id": 171384,
//       "original_language": "te",
//       "original_title": "దేనికైనా రేడీ",
//       "overview": "Veera Narasimha Naidu (Prabhu) is a faction leader in Kurnool who raised his sister Saraswati (Seetha) with love and Affection to make her forget the loss of their Mother. During the marriage time, she eloped with Basha (Suman), whom she loved which led the death of Narasimha Naidu's Father. Thus enraged Narasimha Naidu cuts the leg of Basha which created a rift between the two families. On a case to win the property belonging to Saraswati, Basha wins the case on Narasimha Naidu after a long gap of 25 years. Seeing the sorrow of Saraswati, her son Sulaiman (Vishnu Manchu) vows to unite the two families and waits for a situation.",
//       "popularity": 0.79,
//       "poster_path": "/bdrcCzcNUzRiNEE7uRXTzzCoG5s.jpg",
//       "release_date": "2012-10-23",
//       "title": "Dhenikaina Ready",
//       "video": false,
//       "vote_average": 4.5,
//       "vote_count": 6
//     },
//     {
//       "adult": false,
//       "backdrop_path": null,
//       "genre_ids": [
//         35,
//         10751,
//         18
//       ],
//       "id": 253047,
//       "original_language": "te",
//       "original_title": "పాండవులు పాండవులు తుమ్మెద",
//       "overview": "When Naidu confronts his son's rival group to end their squabbles, he encounters their mother Satya, his long lost love, separated by the twist of fate. As Honey learns the secret between Naidu and Satya, she is kidnapped by her father's arch rival Suyodhana Goud, who sees an opportunity to unwillingly ensnare her into a marriage with his son. Although these unfortunate turn of events bring Naidu, Satya and their sons together, they must devise a clever escape plan for Honey in this comedy-action journey.",
//       "popularity": 0.626,
//       "poster_path": "/nQxRb9HOnVAlqTuBkGcxq8W4sa1.jpg",
//       "release_date": "2014-01-31",
//       "title": "Paandavulu Paandavulu Thummeda",
//       "video": false,
//       "vote_average": 6,
//       "vote_count": 3
//     }
//   ],
//   "total_pages": 1,
//   "total_results": 9
// }
