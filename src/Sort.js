var SortObj = {

    compareTwoNewsByVotes: function(b, a) {
        if (a.votes < b.votes)
            return -1;
        if (a.votes > b.votes)
            return 1;
        return 0;
    },

    compareTwoNewsByStars: function(a, b) {
        if (a.starred === b.starred) {
            if(a.votes > b.votes){
              return 1;
            }
            if(a.votes < b.votes){
              return -1;
            }
            return 0;
        } else if (a.starred) {
            return 1;
        } else {
            return -1;
        }
    }
}
export default SortObj;
