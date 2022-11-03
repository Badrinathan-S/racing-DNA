const place = [
    {
        _id: "1",
        place: "Madurai-Thenur"
    },
    {
        _id: "2",
        place: "Salem"
    }
];

const cabs = [
    {
        _id: "1",
        place_id: "1",
        cabName: "Periyar cab"
    },
    {
        _id: "2",
        place_id: "1",
        cabName: "mattuthavani cab"
    }
]

const cabStops = [
    {
        _id: "1",
        place_id: "1",
        cab_id: "1",
        cabStopName: "Periyar",
        order: "1",
        reached: "false"
    },
    {
        _id: "2",
        place_id: "1",
        cab_id: "1",
        cabStopName: "kalavasal",
        order: "2",
        reached: "false"
    },
    {
        _id: "3",
        place_id: "1",
        cab_id: "1",
        cabStopName: "fathima college",
        order: "3",
        reached: "false"
    },
    {
        _id: "4",
        place_id: "1",
        cab_id: "1",
        cabStopName: "samayanallur",
        order: "4",
        reached: "false"
    },
    {
        _id:"5",
        place_id: "1",
        cab_id: "1",
        cabStopName: "Thenur office",
        order: "5",
        reached: "false"
    },
    {
        _id:"6",
        place_id: "1",
        cab_id: "2",
        cabStopName: "mattuthavani",
        order: "1",
        reached: "false"
    },
    {
        _id:"7",
        place_id: "1",
        cab_id: "2",
        cabStopName: "fathima college",
        order: "2",
        reached: "false"
    },
    {
        _id:"8",
        place_id: "1",
        cab_id: "2",
        cabStopName: "samayanallur",
        order: "3",
        reached: "false"
    },
    {
        _id:"9",
        place_id: "1",
        cab_id: "2",
        cabStopName: "Thenur office",
        order: "4",
        reached: "false"
    },
];

module.exports = {place, cabs, cabStops};