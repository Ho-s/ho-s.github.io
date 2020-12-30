// const n=prompt('세로 N:')
// const m=prompt('가로 M:')
// const graph=[]

// for(let i=0;i<n;i++){
//     const line=prompt(`line No.${i+1} max:${m}`)
//     graph.push([])
    
//     for(let j=0;j<m;j++){
//         graph[i][j]=line[j]
//         console.log(line[j])
//     }
// }

const n=5
const m=6
const graph=[
    ['1','0','1','0','1','0'],
    ['1','1','1','1','1','1'],
    ['0','0','0','0','0','1'],
    ['1','1','1','1','1','1'],
    ['1','1','1','1','1','1']
]

dx=[-1,1,0,0]
dy=[0,0,-1,1]

queue=[]
function bfs(x,y){
    queue.push(x)
    queue.push(y)
    while(queue.length!==0){
        const x=queue.shift()
        const y=queue.shift()
        for(let i=0;i<dx.length;i++){
            nx = x+dx[i]
            ny = y+dy[i]
            console.log(graph[nx][ny])
            if(nx<0||nx>=n||ny<0||ny>=m){
                console.log('1')
                continue
            }
            if(graph[nx][ny]===0){
                console.log('2')
                continue
            }
            if(graph[nx][ny]===1){
                graph[nx][ny]==graph[x][y]+1
                queue.push((nx,ny))
                console.log('3')
            }
            console.log(queue)
        }
    }
    return graph[n-1][m-1]
}

console.log(bfs(0,0))