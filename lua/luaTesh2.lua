
--  方法ap
--table.sort(tbl, comp)，comp在缺省的情况下默认以小于进行排序。
print(package.path);
-- local Print=require("Print")

local tbl = {1,2,4,5,3}
table.sort(tbl)

--Print.table(tbl)
for  i=1,5  do
	print(tbl[i])
end

