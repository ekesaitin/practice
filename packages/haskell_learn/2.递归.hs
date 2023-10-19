maximum' :: (Ord a) => [a] -> a 
maximum' [] = error "maximum of empty list"
maximum' [x] = x
maximum' (x:xs) = max x (maximum' xs)


replicate' :: (Ord i, Num i) => i -> a -> [a]
replicate' n x
    | n <= 0 = []
    | otherwise = x:replicate' (n-1) x

take' :: (Num i, Ord i) => i -> [a] -> [a]
take' n _ 
    | n <= 0 = []
take' _ [] = []
take' n (x:xs) = x : take' (n-1) xs


reverse' :: [a] -> [a]
reverse' [] = []
reverse' (x:xs) = reverse' xs ++ [x]

elem' :: (Eq a ) => a -> [a] -> Bool
elem' a [] = False
elem' a (x:xs)
    | x == a = True
    | otherwise = a `elem'` xs

-- 快速排序
quicksort :: (Ord a) => [a] -> [a]   
quicksort [] = []   
quicksort (x:xs) =
    let smallerSorted = quicksort [a | a <- xs, a <= x]
        biggerSorted = quicksort [a | a <- xs, a > x]
    in smallerSorted ++ [x] ++ biggerSorted