# 我想要提升一下算法能力

# 每天坚持最少一题LeetCode

# 想靠自己的努力进一个大厂，不管结果怎么样，至少我努力过
 
#  加油 2021

## 一月
- 打卡 1/02
- 打卡 1/09
- 打卡 1/10
- 打卡 1/11
- 打卡 1/12
- 打卡 1/13
- 打卡 1/14
- 打卡 1/15
- 打卡 1/16
- 打卡 1/17
- 打卡 1/18
- 打卡 1/19
- 打卡 1/20
- 打卡 1/21
- 打卡 1/22
- 打卡 1/23
- 打卡 1/24
- 打卡 1/25

- 打卡 1/26 今天使用层序遍历(广度优先)做了几道题，做的很快，并且层序遍历(广度优先)也可以用来求一棵树的深度,并且二叉树中路径那个，磨了许久，我草，居然是让求，"到叶子结点,居然还有负数 " 改良了以下  加了两个判断条件，  把+的方式换成了-的方式 就ok了！

- 打卡 1/27 今天有一道动态规划的题  我第一次接触 没做出来  感觉算法真的好难啊！ 刷面经的时候看到了一些题 就顺便写
  
- 打卡 1/28 今天被动态规划整怕了  就做了3倒题   我发现以前的一些题已经忘了，但可能想得起来一些思路,hhhh
  
- 打卡 1/29 今天剑指offer系列就快完了 剩下几道题 真的不太会，看了题解也不想做的那种。 今天复习了一下TCP HTTP状态码，HTTPS的加密，一些垂直居中布局方法，以及cookie session的区别，并且cookie跨域发送的话与Credential有关（新增samesite字段,strict,lav,none分别不同程度的对cookie发送进行限制）。知道了cors跨域分两种，复杂请求会进行一次options请求，并且带上headers和methods头部，通过后再发送第二次请求。再次深入了解了事件循环。   还是那样 每天看看面经查缺补漏。最近要开始对Vue源码部分深入了,今天也看着别人的面经口述了一些关于Vue源码的题。在家这样过一天也挺好的。

- 打卡 1/30 今天基本上一天都在做团队的项目(脑壳痛)。同样的也做了几道算法题，并且复习了一下归并排序。不过今天的就比较简单了，庆幸的一件事是一道题超过了100%的朋友。还有一件事是，能感觉到自己的算法能力提升了，能考虑更多不同的结果，还有一些常用的解法，不同的解法。 今天看了一下css选择器以及优先级,再次了解了一下js的垃圾回收机制,昨天事件循环还没看完，争取12：30之前补完。HTTP2.0引入流的概念，多路复用一直还是比较模糊。明天如果有时间了解清楚做一个总结。
  
- 打卡 1/31 一月结束啦~~昨天落下的事件循环搞清楚了！！和自己之前看到的所有文章几乎都不一样!理清了事件循环，setTimeOut,setInterval等在队列中的顺序和机制。HTTP2.0多路复用的原理也搞清楚了，二进制分帧，引入了流的概念实现并发，一段发送，一段接收根据标识重组，并且可以设置优先级。服务器推送。头部压缩双方一起维护一个头部表，每次发送只需要发送不同的部分在表中的索引。相比一般的http1.x 每次都发送冗长的头部有很大的提升。  二进制分帧是HTTP2.0的核心吧，可以使用一些特定的帧来设置特定的功能，比如说流量控制。

- 打卡 2/1  今天看了一天的Vue原理，280页本来打算一天40页,结果兴趣上来了就看了80页。了解了Vue响应式原理,Object.defineProperty的缺点,对于数组的侦测怎么做的(变异方法),并且为了能够在getter中和拦截器中都访问到Dep，Vue把数组的依赖Dep放到了Observer实例上，然后把这个实例加到数组上，数组通过.__ob__的方式来进行获取。了解$set,$watch,$delete的原理，了解了虚拟dom的中粒度的改变。因为watch可以观测一个函数，所以Dep和watch是多对多的方式，使用了depIds,deps来避免重复收集依赖，可以使用teardown来移除一个依赖。了解了虚拟结点的类型，patch(内含有diff过程)还没看完（明天继续) 。至于算法题的话，今天自己就想到了快慢指针的方法，以前是想不到的，也算一个提升吧！ 

- 打卡 2/2  今天花一上午的时间做了团队的项目，下午继续把昨天的patch(diff过程看了，有点意思)。看了模板编译的过程，通过很多正则表达式，对不同的结点进行解析，有start,end,comment,text这种,然后生成（AST),再对AST进行静态结点的标记，静态结点再渲染的时候只渲染一次，其余的就用克隆结点就好了，做静态标记要用递归，判断有没有v-for v-if v-bind v-else @ 是不是内置标签(keep-alive这种),不是组件.那么就是一个静态结点，判断完静态结点又判断静态根结点(全部子节点都是静态根结点),递归的过程，有两个特殊的地方就是，如果只有一个文本结点，或者没有子节点，也不会判断成为静态根结点。-》然后根据AST  VNode.prototype上的 _c  _v  _s这些方法通过new Function(with)的这种方式生成render函数。render函数执行就生成VNode(有层级关系的,也就是虚拟DOM)。。。。。。 今天晚上一直在纠结要不要投简历。最终还是怂了，然后开始做题，结果也很心烦，做了2 3 道简单的。我很怂面试，很紧张。

- 打卡 2/3 今天看了一下一些全局API的实现过程  $nextTick  $forceUpdate $mount 没看多少，光$nextTick就够多了。 今下午投了简历,结果简历都没通过。有点打击到自己了，hhhh，所以今天题也没做多少，做了一个LRU,和二叉树根节点到所有叶子节点组成的数的和。哎。。。
  
- 打卡 2/4 今天看了 cookie session  token 这些的区别和作用。然后下午看了Vuex的源码modules的注册过程，知道了为啥都能拿到$store了。然后做了4道算法题，准备对前面做的一些算法题进行一些优化，学习思路。  准备写一篇深入事件循环的博客。

- 打卡 2/5 今天谢了一篇深入事件循环的文章，算法题只做了一个千分位，css复习了居中，三栏，position，display bfc，选择器优先级，伪类。然后js的话复习了左边的拿一些。明天看看阮一峰的ES6
  

- 打卡 2/6 今天复习了很多。。。。。超级多,累死了。明天早晨再赶紧补剩下的！希望面试顺利吧！


- 打卡 2/8 前两天在面试,也相当于打卡了吧，哈哈哈哈。今天重返之前的状态，冲冲！！！


- 打卡 2/12 过年耽搁了，今天开始继续冲！！！！ gogogo 


- 打卡 2/17 这段时间一直在等面试结果，没状态。。。。呜呜呜


- 打卡 2/18 今天收到通知说三面过了，约了明天的hr面  开心！！！