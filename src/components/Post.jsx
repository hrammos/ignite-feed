import styles from './Post.module.css'

export function Post () {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            src="https://avatars.githubusercontent.com/u/28076738?v=4"
            className={styles.avatar}
          />

          <div className={styles.authorInfo}>
            <strong>Henrique Ramos</strong>
            <span>Software Developer</span>
          </div>
        </div>

        <time
          title="31 de Julho às 18:55h" 
          dateTime="2022-07-31 18:55:51"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>

        <p>Acabei de subir mais um projeto no github</p>
        
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptatibus, minus illum possimus libero alias corporis ipsam, voluptate ratione, consectetur sed hic similique. Similique, ullam. Pariatur adipisci vel voluptatem enim!
        </p>

        <p>
          <a href="#">gitgub/hrammos</a>
        </p>
        
        <p>
          <a href="#">#ignite</a> {' '}
          <a href="#">#novoprojeto</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
