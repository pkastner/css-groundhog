## Notes

* Pagination > 6 entries must be concatenated using ellipsis `...` after the first and last 3 entries.
* If first entry is selected as current entry, `.arrow--disabled` must be added to the corresponding `.arrow`.  
Vice versa for last entry. (Navigation out of bounds must not occur.)
* First and last entry always remain, entries between predecessor and successor of current page get hidden and represented via ellipsis `...`.
* Special cases for 3rd and 3rd-to-last entry; as there occur 4 entries in a row, the opposite section features 2 entries instead of 1 or 3.

### Additional info

[Pagination](http://assets.ruxitlabs.com/styleguide/component/pagination) section in AssetLib.
