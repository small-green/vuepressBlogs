# CSS布局
> 布局选得好，写前端事半功倍  
> 以前我刚学html的时候，瞎写css瞎试，根本一点积累都没有，所以学了很多时间在写布局上  
> 深入学习一下布局，可以帮助我们以后快速写网站

### table 布局（现在用得少）

```html
<div class="table">
   <div class="left">我是左边</div>
   <div class="right">我是右边</div>
</div>
```

```css
 .table{
       display: table;
}
 .left,.right{
       display: table-cell;
}
```
### flex 布局(常用常用)

