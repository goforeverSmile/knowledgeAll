
--  方法ap
--table.sort(tbl, comp)，comp在缺省的情况下默认以小于进行排序。
function pairsBySort(_t, func)
    local a = {}
    for n in pairs(_t) do a[#a + 1] = n end
    table.sort(a, func)
    local i = 0
    return function()
        i = i + 1
        return a[i], _t[a[i]]
    end
end

for i,v in pairsBySort(tbl) do
    tbl_ret[#tbl_ret + 1] = v
end

function sortGT(a, b)
    return a > b
end


local tbl = {1,2,4,5,3}

