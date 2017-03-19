//节点数
public static int getNodeNumRec(TreeNode root){
	if(root == null)
		return 0;
	return getNodeNumRec(root.left)+getNodeNumRec(root.right)+1;
}
public static int getNodeNum(TreeNode root){
	if(root == null)
		return 0;
	Queue<TreeNode> queue = new LinkedList<TreeNode>();
	int count = 1;
	queue.add(root);
	while(!queue.isEmpty()){
		TreeNode cur = queue.remove();
		if(cur.left != null){
			queue.add(cur.left);
			count++;
		}
		if(cur.right != null){
			queue.add(cur.right);
			count++;
		}
	}
	return count;
}
//
//深度
public static int getTreeDeepRec(TreeNode root){
	if(root == null)
		return 0;
	int left_deep = getTreeDeepRec(root.left);
	int right_deep = getTreeDeepRec(root.right);
	return Math.max(left_deep,right_deep)+1;
}
public static int getTreeDeep(TreeNode root){
	 if(root == null){  
            return 0;  
        }  
        int depth = 0;                          // 深度  
        int currentLevelNodes = 1;      // 当前Level，node的数量  
        int nextLevelNodes = 0;         // 下一层Level，node的数量  
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        queue.add(root);
        while(!queue.isEmpty()){
        	TreeNode cur = queue.remove();	//从队列头开始删除节点
        	currentLevelNodes--;			//相应减少当前层节点数量
        	if(cur.left != null){			//如果有左孩子添加到队尾
        		queue.add(cur.left);
        		nextLevelNodes++;			//下一层节点数加1
        	}
        	if(cur.right != null){			
        		queue.add(cur.right);
        		nextLevelNodes++;
        	}
        	if(currentLevelNodes == 0){		//当前层的节点都遍历完毕
        		currentLevelNodes = nextLevelNodes;	//初始化下一层的遍历
        		depth++;					//高度增加
        		nextLevelNodes = 0;
        	}
        }
        return depth;
}
//前序遍历：先遍历根结点，然后遍历左子树，最后遍历右子树。
public static void preorderTravelsalRec(TreeNode root){
	if(root == null)
		return ;
	System.out.print(root.val+"");
	preorderTravelsalRec(root.left);
	preorderTravelsalRec(root.right);
}
public static void preorderTravelsal(TreeNode root){
	if(root == null)
		return ;
	Stack<TreeNode> stack = new Stack<TreeNode>();
	stack.push(root);
	while(!stack.isEmpty()){
		TreeNode cur = stack.pop();
		System.out.print(cur.val);
		if(cur.right != null){
			stack.push(cur.right);
		}
		if(cur.left != null){
			stack.push(cur.left);
		}

	}
}
//中序遍历：先遍历左子树，然后遍历根结点，最后遍历右子树。
public static void inorderTravelsalRec(TreeNode root){
	if(root == null)
		return ;
	inorderTravelsalRec(root.left);
	System.out.print(root.val+"");
	inorderTravelsalRec(root.right);
}
 /** 
     * 中序遍历迭代解法 ，用栈先把根节点的所有左孩子都添加到栈内， 
     * 然后输出栈顶元素，再处理栈顶元素的右子树 
     * http://www.youtube.com/watch?v=50v1sJkjxoc 
     *  */
public static void inorderTravelsal(TreeNode root){
		if(root == null)
			return ;
		Stack<TreeNode> cur = new Stack<TreeNode>();
		stack.push(root);
		TreeNode cur = stack.pop();
		while(true){
			while(cur.left != null){   		// 先添加一个非空节点所有的左孩子到栈  
				stack.push(cur.left);
				cur = cur.left;
			}
			if(stack.isEmpty()){
				break;
			}
			// 因为此时已经没有左孩子了，所以输出栈顶元素  
			cur = stack.pop();
			System.out.print(cur.val);
			cur = cur.right;				// 准备处理右子树  
		}
}
//后序遍历:
public static void postorderTraversalRec(TreeNode root) {  
        if (root == null) {  
            return;  
        }  
        postorderTraversalRec(root.left);  
        postorderTraversalRec(root.right);  
        System.out.print(root.val + " ");  
    }  
public static void postorderTraversal(TreeNode root){
	if(root == null)
		return ;
	Stack<TreeNode> stack = new Stack<TreeNode>();
	Stack<TreeNode> output = new Stack<TreeNode>();
	stack.push(root);
	while(!stack.isEmpty()){
		TreeNode cur = stack.pop();
		output.push(cur);
		if(cur.left != null){
			stack.push(cur.left);
		}
		if(cur.right != null){
			stack.push(cur.right);
		}
	}
	while(!output.isEmpty()){
		System.out.print(output.pop().val)
	}
}
/** 
     * 分层遍历二叉树（按层次从上往下，从左往右）迭代 
     * 相当于广度优先搜索，使用队列实现。队列初始化，将根节点压入队列。当队列不为空，进行如下操作：弹出一个节点 
     * ，访问，若左子节点或右子节点不为空，将其压入队列 
     */ 
public static void levelTraversal(TreeNode root){
	if(root == null){
		return ;
	}
	LinkedList<TreeNode> queue = new LinkedList<TreeNode>();
	queue.add(root);
	while(!queue.isEmpty()){
		TreeNode cur = queue.removeFirst();
		System.out.print(cur.val);
		if(cur.left != null){
			queue.add(cur.left);
		}
		if(cur.right != null){
			queue.add(cur.right);
		}
	}
}
/** 
     * 求二叉树的镜像 递归解法：  
     * （1）如果二叉树为空，返回空 
     * （2）如果二叉树不为空，求左子树和右子树的镜像，然后交换左子树和右子树 
     */ 
    // 1. 破坏原来的树，把原来的树改成其镜像 
    public static TreeNode mirrorRec(TreeNode root){
    	if(root == null)
    		return ;
    	TreeNode left = root.left;
    	TreeNode right = root.right;
    	root.left = right;
    	root.right = left;
    	mirrorRec(root.left);
		mirrorRec(root.right);  
		return root;  	
    } 
    public static void mirror(TreeNode root){
    	if(root == null)
    		return ;
    	Stack<TreeNode> stack = new Stack<TreeNode>();
    	stack.push(root);
    	while(!stack.isEmpty()){
    		TreeNode cur = stack.pop();
    		TreeNode temp = null;
    		temp = cur.left;
    		cur.left = cur.right;
    		cur.right = temp;
    		if(cur.right != null){
    			stack.push(cur.right);
    		}
    		if(cur.left != null){
    			stack.push(cur.left);
    		}
    	}
    }
    //2. 不破坏原来的树
    public static TreeNode mirrorRec(TreeNode root){
    	if(root == null)
    	{
    		return null;
    	}
    	TreeNode newTreeNode = new TreeNode(root.val);
    	newTreeNode.left = root.right;
    	newTreeNode.right = root.left;
    	mirror(root.left);
    	mirror(root.right);
    	return newTreeNode;
    } 
    public static TreeNode mirror(TreeNode root){
    	if(root == null)
    		return;
    	Stack<TreeNode> stack = new Stack<TreeNode>();
    	Stack<TreeNode> newstack = new Stack<TreeNode>();
    	stack.push(root);
    	newstack.push(root);
    	while(!stack.isEmpty()){
    		TreeNode cur = stack.pop();
    		TreeNode newcur = newstack.pop();
    		if(cur.left != null){
    			newcur.right = new TreeNode(cur.left.val);
    			stack.push(cur.left);
    			newstack.push(newcur.right);
    		}
    		if(cur.left != null){
    			newcur.left = new TreeNode(cur.right.val);
    			stack.push(cur.left);
    			newstack.push(newcur.left);
    		}
    	}
    }
//判断两树是否互为镜像
public static boolean ismirro(TreeNode r1,TreeNoder r2){
    if(r1 == null || r2 == null)
        return false;
    if(r1 == null && r2 == null){
        return true;
    }
    if(r1.val != r2.val){
        return false;
    }
    return ismirro(r1.left,r2.right) && ismirro(r1.right,r2.left);
}
//求二叉树中最低公共祖先节点
public static TreeNode getLastCommonParentRec(TreeNode root,TreeNode n1,TreeNode n2){
        if(findNodeRec(root.left,n1)){          //n1在左子树
            if(findNodeRec(root.right,n2)){     //n2在右子树
                return root;
            }
            else{   
                getLastCommonParentRec(root.left,n1,n2);
            }
        }
        else{
            if(findNodeRec(root.left,n2)){      //n1在右子树，n2在左子树
                return root;
            }
            else{
                getLastCommonParentRec(root.right,n1,n2);
            }
        }
}
public static boolean findNodeRec(TreeNode root,TreeNode node){
        if(root == null || node == null){
            return false;
        }
        if(root == node){
            return true;
        }
        boolean found = findNodeRec(root.left,node);
        if(!found){
            found = findNodeRec(root.right,node);
        }
        return found;
}
public static TreeNode getLastCommonParentRecNew(TreeNode root,TreeNode n1,TreeNode n2){
    if(root == null)
        return null;
    if(root == n1 || root == n2){
        return root;
    }
    TreeNode commonInLeft = getLastCommonParentRecNew(root.left,n1,n2);
    TreeNode commonInRight = getLastCommonParentRecNew(root.right,n1,n2);
     if(commonInLeft!=null && commonInRight!=null){  
            return root;  
        }  
           
        // 其他情况是要不然在左子树要不然在右子树  
        if(commonInLeft != null){  
            return commonInLeft;  
        }  
           
        return commonInRight;  
} 
/* 求二叉树中节点的最大距离 即二叉树中相距最远的两个节点之间的距离。 (distance / diameter) 
     * 递归解法：  
     * （1）如果二叉树为空，返回0，同时记录左子树和右子树的深度，都为0 
     * （2）如果二叉树不为空，最大距离要么是左子树中的最大距离，要么是右子树中的最大距离， 
     * 要么是左子树节点中到根节点的最大距离+右子树节点中到根节点的最大距离， 
     * 同时记录左子树和右子树节点中到根节点的最大距离。
     */
public static Result getMaxDistance(TreeNode root){
    if(root == null)
    {
        Result empty = new Result(0,-1);
        return empty;
    }
    Result lmd = getMaxDistance(root.left);
    Result rmd = getMaxDistance(root.right);
    Result res = new Result();
    res.maxDepth = Math.max(lmd.maxDepth,rmd.maxDepth)+1;
    res.maxDistance = Math.max(lmd.maxDistance+rmd.maxDistancelmd.maxDistance,Math.max(rmd.maxDistance,lmd.maxDistance));
    return res;
}
public static class Result(){
    int maxDepth;
    int maxDistance;
    public Result(){

    }
    public Result(int maxDistance,int maxDepth){
        this.maxDistance = maxDistance;
        this.maxDepth = maxDepth;
    }
}
 /** 
     * 13. 由前序遍历序列和中序遍历序列重建二叉树（递归） 
     * 感觉这篇是讲的最为清晰的: 
     * http://crackinterviewtoday.wordpress.com/2010/03/15/rebuild-a-binary-tree-from-inorder-and-preorder-traversals/ 
     * 文中还提到一种避免开额外空间的方法，等下次补上 
     */ 
 public static TreeNode rebulidBinaryTreeRec(List<Integer> preOrder,List<Integer> inOrder){
    TreeNode root = null;
    List<Integer> leftPreOrder;
    List<Integer> rightPreOrder;
    List<Integer> leftInorder;
    List<Integer> rightInorder;
    int inorderPos;
    int preorderPos;
    if((preOrder.size() != 0) &&(inOrder.size() != 0)){
        root = new TreeNode(preOrder.get(0));
    }
    // 因为知道root节点了，所以根据root节点位置，把preorder，inorder分别划分为 root左侧 和 右侧 的两个子区间  
            inorderPos = inOrder.indexOf(preOrder.get(0));      // inorder序列的分割点  
            leftInorder = inOrder.subList(0, inorderPos);  
            rightInorder = inOrder.subList(inorderPos + 1, inOrder.size());  
    
            preorderPos = leftInorder.size();                           // preorder序列的分割点  
            leftPreOrder = preOrder.subList(1, preorderPos + 1);  
            rightPreOrder = preOrder.subList(preorderPos + 1, preOrder.size());  
    
            root.left = rebuildBinaryTreeRec(leftPreOrder, leftInorder);        // root的左子树就是preorder和inorder的左侧区间而形成的树  
            root.right = rebuildBinaryTreeRec(rightPreOrder, rightInorder); // root的右子树就是preorder和inorder的右侧区间而形成的树  
        }
        return root;
 }
 boolean isCompleteTreeNode(TreeNode root){
        if(root == null){
            return false;
        }
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        queue.add(root);
        boolean result = true;
        boolean hasNoChild = false;
        while(!queue.isEmpty()){
            TreeNode current = queue.remove();
            if(hasNoChild){
                if(current.left!=null||current.right!=null){  //主要是针对上一个节点是有左孩子无又孩子的情况，此时后面都不应该有任何节点
                    result = false;
                    break;
                }
            }else{
                if(current.left!=null&&current.right!=null){
                    queue.add(current.left);
                    queue.add(current.right);
                }else if(current.left!=null&&current.right==null){
                    queue.add(current.left);
                    hasNoChild = true;

                }else if(current.left==null&&current.right!=null){
                    result = false;
                    break;
                }else{
                    hasNoChild = true;
                }
            }

        }
        return result;
    }

    boolean isCompleteTreeNode(TreeNode root){
        if(root == null)
            return false;
        Queue<TreeNode> queue = new Queue<TreeNode>();
        queue.add(root);
        boolean hasNoChild = false;
        boolean result = true;
        while(!queue.isEmpty()){
            TreeNode cur = queue.remove();
            if(hasNoChild){
                if (cur.left != null || cur.right != null) {
                    result = false;
                    break;
                }
            }else{
                if(cur.left != null && cur.right != null)
                {
                    queue.add(cur.left);
                    queue.add(cur.right);
                }else if(cur.left != null && cur.right == null){
                    queue.add(cur.left);
                    hasNoChild = true;
                }else if(cur.left == null && cur.right != null){
                    result = false;
                    break;
                }
                else{
                    hasNoChild = true;
                }
            }
        }
    }

    public class Solution {
    boolean isSymmetrical(TreeNode pRoot)
    {
          if(pRoot == null)
              return true;
         TreeNode newRoot = getMirror(root); 
        return bianli(root,newRoot);
    }
    public TreeNode getMirror(TreeNode root){
        if(root == null)
            return ;
        TreeNode newRoot = new TreeNode(root.val);
        newRoot.left = root.right;
        newRoot.right = root.left;
        getMirror(root.left);
        getMirrot(root.right);
        return newRoot;
    }
    boolean bianli(TreeNode pRoot,TreeNode newRoot)
    {
        if(pRoot.val != newRoot.val)
            return false;
        return bianli(pRoot.left,newRoot.left) && bianli(pRoot.right,newRoot.right);
       
    }
   
}