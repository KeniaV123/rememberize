import { createSlice } from '@reduxjs/toolkit';

export const wordsSlice = createSlice({
    name: 'words',
    initialState: {
        words: [
            [
                {
                    word: 'Book',
                    correctDefinition: 'Set of sheets joined to form a volume that is filled with different data to keep a record.',
                    definitions: [
                        {
                            id: 1,
                            definition: 'A complex of runways and buildings for the takeoff, landing, and maintenance of civil aircraft, with facilities for passengers.',
                            answer: false
                        },
                        {
                            id: 2,
                            definition: 'The land alongside or sloping down to a river or lake.',
                            answer: false
                        },
                        {
                            id: 3,
                            definition: 'Set of sheets joined to form a volume that is filled with different data to keep a record.',
                            answer: true
                        }
                    ]
                }
            ],
            [
                {
                    word: 'Book2',
                    correctDefinition: 'Set of sheets joined to form a volume that is filled with different data to keep a record.',
                    definitions: [
                        {
                            id: 1,
                            definition: 'A hard, brittle substance, typically transparent or translucent, made by fusing sand with soda, lime, and sometimes other ingredients and cooling rapidly.',
                            answer: true
                        },
                        {
                            id: 2,
                            definition: 'An instrument used for cutting cloth, paper, and other thin material, consisting of two blades laid one on top of the other and fastened in the middle so as to allow them to be opened and closed by a thumb and finger inserted through rings on the end of their handles.',
                            answer: false
                        },
                        {
                            id: 3,
                            definition: 'A club, building, or large room, usually containing special equipment, where people go to do physical exercise and get fit.',
                            answer: false
                        }
                    ]
                }
            ],
            [
                {
                    word: 'Book3',
                    correctDefinition: 'Set of sheets joined to form a volume that is filled with different data to keep a record.',
                    definitions: [
                        {
                            id: 1,
                            definition: 'A small piece of ground used to grow vegetables, fruit, herbs, or flowers.',
                            answer: false
                        },
                        {
                            id: 2,
                            definition: 'A one-piece garment worn by women and girls that covers the body and extends down over the legs.',
                            answer: false
                        },
                        {
                            id: 3,
                            definition: 'The distinctive clothing worn by members of the same organization or body or by children attending certain schools.',
                            answer: true
                        }
                    ]
                }
            ],
            [
                {
                    word: 'Book4',
                    correctDefinition: 'Set of sheets joined to form a volume that is filled with different data to keep a record.',
                    definitions: [
                        {
                            id: 1,
                            definition: 'A room or area where food is prepared and cooked.',
                            answer: false
                        },
                        {
                            id: 2,
                            definition: 'A young human being below the age of puberty or below the legal age of majority.',
                            answer: true
                        },
                        {
                            id: 3,
                            definition: 'Quick to understand, learn, and devise or apply ideas; intelligent.',
                            answer: false
                        }
                    ]
                }
            ],
            [
                {
                    word: 'Book',
                    correctDefinition: 'Set of sheets joined to form a volume that is filled with different data to keep a record.',
                    definitions: [
                        {
                            id: 1,
                            definition: 'A complex of runways and buildings for the takeoff, landing, and maintenance of civil aircraft, with facilities for passengers.',
                            answer: false
                        },
                        {
                            id: 2,
                            definition: 'The land alongside or sloping down to a river or lake.',
                            answer: false
                        },
                        {
                            id: 3,
                            definition: 'Set of sheets joined to form a volume that is filled with different data to keep a record.',
                            answer: true
                        }
                    ]
                }
            ]
        ],
        currentIndex: 0
    },
    reducers: {
        incrementIndex: (state ) => {
            if (state.currentIndex < state.words.length - 1) {
                state.currentIndex += 1;
            }
        },
    }
});


// Action creators are generated for each case reducer function
export const { incrementIndex } = wordsSlice.actions;